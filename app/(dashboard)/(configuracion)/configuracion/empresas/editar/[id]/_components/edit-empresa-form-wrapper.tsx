'use client'

import { EditTableEntryForm } from '@/components/EditTableEntryForm'
import { type ConfigParameter } from '@/components/TableEntryForm'
import { updateEmpresa } from '@/services/data/actions/server/empresas/put-empresa-by-id'
import { type Empresa } from '@/types/empresa'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
	direccion: z
		.string({
			required_error: 'La direccion es requerida.'
		})
		.min(3, {
			message: 'La direccion debe tener al menos 3 caracteres.'
		}),
	ciiu: z.string({
		required_error: 'El ciiu es requerido.'
	}),
	email: z
		.string({
			required_error: 'El email es requerido.'
		})
		.email({
			message: 'El email debe ser valido.'
		}),
	ciudad: z.string({
		required_error: 'La ciudad es requerida.'
	}),
	estado: z.string({
		required_error: 'El estado es requerido.'
	}),
	industria: z.string({
		required_error: 'La industria es requerida.'
	}),
	region: z.string({
		required_error: 'La region es requerida.'
	}),
	nombre: z
		.string({
			required_error: 'El nombre es requerido.'
		})
		.min(3, {
			message: 'El nombre debe tener al menos 3 caracteres.'
		}),
	representanteLegal: z
		.string({
			required_error: 'El representante legal es requerido.'
		})
		.min(3, {
			message: 'El representante legal debe tener al menos 3 caracteres.'
		}),
	rut: z
		.string({
			required_error: 'El rut es requerido.'
		})
		.min(6, {
			message: 'El rut debe tener al menos 6 caracteres.'
		}),
	telefono: z
		.string({
			required_error: 'El telefono es requerido.'
		})
		.min(9, {
			message: 'El telefono debe tener al menos 9 caracteres.'
		})
})

export function EditEmpresaFormWrapper({
	empresa,
	ciudadesOptions,
	regionesOptions,
	ciiusOptions
}: {
	empresa: Empresa // Initial values for pre-filling the form
	ciudadesOptions: Array<{ value: string; label: string }>
	regionesOptions: Array<{ value: string; label: string }>
	ciiusOptions: Array<{ value: string; label: string }>
}) {
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const { error } = await updateEmpresa(empresa.id, values)

			if (error) {
				toast.error(`Hubo un error al editar la empresa: ${error}`)
			} else {
				toast.success('Empresa editada correctamente.')
				return true
			}
		} catch (error) {
			console.error({ error })
			toast.error('Hubo un error al editar la empresa, si el error persiste contacte a soporte.')
		}
	}

	const configParameters: ConfigParameter[] = [
		{
			name: 'nombre',
			label: 'Nombre',
			type: 'input',
			placeholder: 'Nombre de la empresa',
			description: 'Nombre de la empresa'
		},
		{
			name: 'industria',
			label: 'Industria',
			type: 'input',
			description: 'Industria de la empresa'
		},
		{
			name: 'ciiu',
			label: 'Ciiu',
			type: 'select',
			options: ciiusOptions,
			description: 'Ciiu de la empresa'
		},
		{ name: 'rut', label: 'Rut', type: 'input', placeholder: 'Rut', description: 'Rut de la empresa' },
		{
			name: 'representanteLegal',
			label: 'Representante Legal',
			type: 'input',
			placeholder: 'Representante legal',
			description: 'Representante legal de la empresa'
		},
		{ name: 'email', label: 'Email', type: 'input', placeholder: 'Email', description: 'Email de la empresa' },
		{
			name: 'telefono',
			label: 'Telefono',
			type: 'input',
			placeholder: 'Telefono',
			description: 'Telefono de la empresa'
		},
		{
			name: 'direccion',
			label: 'Direccion',
			type: 'input',
			placeholder: 'Direccion',
			description: 'Direccion de la empresa'
		},
		{ name: 'region', label: 'Region', type: 'select', options: regionesOptions, description: 'Region de la empresa' },
		{ name: 'ciudad', label: 'Ciudad', type: 'select', options: ciudadesOptions, description: 'Ciudad de la empresa' },
		{
			name: 'estado',
			label: 'Estado',
			type: 'select',
			options: [
				{
					value: 'activo',
					label: 'Activo'
				},
				{
					value: 'inactivo',
					label: 'Inactivo'
				}
			],
			description: 'Estado de la empresa'
		}
	]

	// Format the empresa object from the db to match the form schema
	const formattedEmpresa = {
		...empresa,
		estado: empresa.estado ? 'activo' : 'inactivo'
	}

	return (
		<EditTableEntryForm
			initialValues={formattedEmpresa}
			configParameters={configParameters}
			onSubmit={onSubmit}
			tableSchema={formSchema}
		/>
	)
}
