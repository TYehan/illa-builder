import { ReactNode } from "react"
import { SelectOptionObject } from "@illa-design/react"
import { BaseSetter } from "@/page/App/components/PanelSetters/interface"

export interface BaseInputSetterProps extends BaseSetter {
  placeholder?: string
}

export interface EditableInputSetterProps extends BaseInputSetterProps {
  icon?: ReactNode
}

export interface InputWithSelectSetterProps extends BaseInputSetterProps {
  options?: string[] | number[] | SelectOptionObject[]
}
