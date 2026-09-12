# `dataCloudflareEmailSecurityAllowPolicies` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicies <a name="DataCloudflareEmailSecurityAllowPolicies" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies cloudflare_email_security_allow_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies(scope: Construct, id: string, config: DataCloudflareEmailSecurityAllowPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender">resetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient">resetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender">resetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType">resetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender">resetVerifySender</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetIsAcceptableSender` <a name="resetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender"></a>

```typescript
public resetIsAcceptableSender(): void
```

##### `resetIsExemptRecipient` <a name="resetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient"></a>

```typescript
public resetIsExemptRecipient(): void
```

##### `resetIsTrustedSender` <a name="resetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender"></a>

```typescript
public resetIsTrustedSender(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPatternType` <a name="resetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType"></a>

```typescript
public resetPatternType(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetVerifySender` <a name="resetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender"></a>

```typescript
public resetVerifySender(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityAllowPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput">isAcceptableSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput">isExemptRecipientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput">isTrustedSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput">patternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput">verifySenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result"></a>

```typescript
public readonly result: DataCloudflareEmailSecurityAllowPoliciesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `isAcceptableSenderInput`<sup>Optional</sup> <a name="isAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput"></a>

```typescript
public readonly isAcceptableSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipientInput`<sup>Optional</sup> <a name="isExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput"></a>

```typescript
public readonly isExemptRecipientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSenderInput`<sup>Optional</sup> <a name="isTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput"></a>

```typescript
public readonly isTrustedSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput"></a>

```typescript
public readonly patternTypeInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `verifySenderInput`<sup>Optional</sup> <a name="verifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput"></a>

```typescript
public readonly verifySenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPoliciesConfig <a name="DataCloudflareEmailSecurityAllowPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityAllowPoliciesConfig: dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction">direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order">order</a></code> | <code>string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType">patternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search">search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#account_id DataCloudflareEmailSecurityAllowPolicies#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#direction DataCloudflareEmailSecurityAllowPolicies#direction}

---

##### `isAcceptableSender`<sup>Optional</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicies#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Optional</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicies#is_exempt_recipient}

---

##### `isTrustedSender`<sup>Optional</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_trusted_sender DataCloudflareEmailSecurityAllowPolicies#is_trusted_sender}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#max_items DataCloudflareEmailSecurityAllowPolicies#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#order DataCloudflareEmailSecurityAllowPolicies#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}.

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

Type of pattern matching.

EMAIL: matches a full email address (e.g. `user@example.com`)
- DOMAIN: matches a domain name (e.g. `example.com`)
- IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
- UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern_type DataCloudflareEmailSecurityAllowPolicies#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#search DataCloudflareEmailSecurityAllowPolicies#search}

---

##### `verifySender`<sup>Optional</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#verify_sender DataCloudflareEmailSecurityAllowPolicies#verify_sender}

---

### DataCloudflareEmailSecurityAllowPoliciesResult <a name="DataCloudflareEmailSecurityAllowPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityAllowPoliciesResult: dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPoliciesResultList <a name="DataCloudflareEmailSecurityAllowPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailSecurityAllowPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailSecurityAllowPoliciesResultOutputReference <a name="DataCloudflareEmailSecurityAllowPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender">isAcceptableSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient">isExemptRecipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient">isRecipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex">isRegex</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender">isSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof">isSpoof</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender">isTrustedSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender">verifySender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isRecipient`<sup>Required</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient"></a>

```typescript
public readonly isRecipient: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex"></a>

```typescript
public readonly isRegex: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isSender`<sup>Required</sup> <a name="isSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender"></a>

```typescript
public readonly isSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isSpoof`<sup>Required</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof"></a>

```typescript
public readonly isSpoof: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender"></a>

```typescript
public readonly verifySender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityAllowPoliciesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a>

---



