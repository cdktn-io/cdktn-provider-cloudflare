# `dataCloudflareZeroTrustCasbIntegrations` Submodule <a name="`dataCloudflareZeroTrustCasbIntegrations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbIntegrations <a name="DataCloudflareZeroTrustCasbIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations cloudflare_zero_trust_casb_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig">DataCloudflareZeroTrustCasbIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig">DataCloudflareZeroTrustCasbIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDlpEnabled">resetDlpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetUseCases">resetUseCases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplication` <a name="resetApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDlpEnabled` <a name="resetDlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDlpEnabled"></a>

```typescript
public resetDlpEnabled(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPage` <a name="resetPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUseCases` <a name="resetUseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetUseCases"></a>

```typescript
public resetUseCases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCasbIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList">DataCloudflareZeroTrustCasbIntegrationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabledInput">dlpEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageInput">pageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCasesInput">useCasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabled">dlpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.page">page</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCases">useCases</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustCasbIntegrationsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList">DataCloudflareZeroTrustCasbIntegrationsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `dlpEnabledInput`<sup>Optional</sup> <a name="dlpEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabledInput"></a>

```typescript
public readonly dlpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageInput"></a>

```typescript
public readonly pageInput: number;
```

- *Type:* number

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCasesInput"></a>

```typescript
public readonly useCasesInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `dlpEnabled`<sup>Required</sup> <a name="dlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabled"></a>

```typescript
public readonly dlpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCases"></a>

```typescript
public readonly useCases: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbIntegrationsConfig <a name="DataCloudflareZeroTrustCasbIntegrationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbIntegrationsConfig: dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.application">application</a></code> | <code>string</code> | Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.direction">direction</a></code> | <code>string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dlpEnabled">dlpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter by DLP enabled status (true/false). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.order">order</a></code> | <code>string</code> | Field to order results by. Available values: "application", "created", "name", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.page">page</a></code> | <code>number</code> | Page number within the paginated result set. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.search">search</a></code> | <code>string</code> | Search integrations by name or application. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.status">status</a></code> | <code>string</code> | Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.useCases">useCases</a></code> | <code>string</code> | Filter by one enabled use case (for example, casb or ces). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}.

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#application DataCloudflareZeroTrustCasbIntegrations#application}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#direction DataCloudflareZeroTrustCasbIntegrations#direction}

---

##### `dlpEnabled`<sup>Optional</sup> <a name="dlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dlpEnabled"></a>

```typescript
public readonly dlpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter by DLP enabled status (true/false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#dlp_enabled DataCloudflareZeroTrustCasbIntegrations#dlp_enabled}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#max_items DataCloudflareZeroTrustCasbIntegrations#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by. Available values: "application", "created", "name", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#order DataCloudflareZeroTrustCasbIntegrations#order}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

Page number within the paginated result set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page DataCloudflareZeroTrustCasbIntegrations#page}

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page_size DataCloudflareZeroTrustCasbIntegrations#page_size}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search integrations by name or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#search DataCloudflareZeroTrustCasbIntegrations#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#status DataCloudflareZeroTrustCasbIntegrations#status}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.useCases"></a>

```typescript
public readonly useCases: string;
```

- *Type:* string

Filter by one enabled use case (for example, casb or ces).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#use_cases DataCloudflareZeroTrustCasbIntegrations#use_cases}

---

### DataCloudflareZeroTrustCasbIntegrationsResult <a name="DataCloudflareZeroTrustCasbIntegrationsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbIntegrationsResult: dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbIntegrationsResultList <a name="DataCloudflareZeroTrustCasbIntegrationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCasbIntegrationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCasbIntegrationsResultOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbIntegrations } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.application">application</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.isPaused">isPaused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult">DataCloudflareZeroTrustCasbIntegrationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.application"></a>

```typescript
public readonly application: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.isPaused"></a>

```typescript
public readonly isPaused: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbIntegrationsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult">DataCloudflareZeroTrustCasbIntegrationsResult</a>

---



