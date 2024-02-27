import { atom } from 'nanostores'

export const formIndex = atom(0)

export const formData = atom({
	firstName: "",
	lastName: "",
	coming: "",
	vegan: "",
	sleepover: "",
	alcohol: "",
	parking: "",
	note: "",
})

export function formDataAdd(key: string, value: string) {
	formData.set({ ...formData.get(), [key]: value })
}

export function formJump(index: number) {
	formIndex.set(index)
}

export function formPrev(index: number) {
	formIndex.set(index == 0 ? 0 : index - 1)
}

export function formNext(index: number) {
	formIndex.set(index == 7 ? 7 : index + 1)
}
