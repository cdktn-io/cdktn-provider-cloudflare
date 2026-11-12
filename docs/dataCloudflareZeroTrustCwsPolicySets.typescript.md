# `dataCloudflareZeroTrustCwsPolicySets` Submodule <a name="`dataCloudflareZeroTrustCwsPolicySets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicySets <a name="DataCloudflareZeroTrustCwsPolicySets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets cloudflare_zero_trust_cws_policy_sets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsPolicySetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig">DataCloudflareZeroTrustCwsPolicySetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig">DataCloudflareZeroTrustCwsPolicySetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOrder"></a>

```typescript
public resetOrder(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicySets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsPolicySets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicySets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList">DataCloudflareZeroTrustCwsPolicySetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.order">order</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustCwsPolicySetsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList">DataCloudflareZeroTrustCwsPolicySetsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPolicySetsConfig <a name="DataCloudflareZeroTrustCwsPolicySetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsPolicySetsConfig: dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Filter to policy sets attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.name">name</a></code> | <code>string</code> | Filter by policy set name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#account_id DataCloudflareZeroTrustCwsPolicySets#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Filter to policy sets attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#deployment_id DataCloudflareZeroTrustCwsPolicySets#deployment_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#direction DataCloudflareZeroTrustCwsPolicySets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#max_items DataCloudflareZeroTrustCwsPolicySets#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by policy set name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#name DataCloudflareZeroTrustCwsPolicySets#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#order DataCloudflareZeroTrustCwsPolicySets#order}

---

### DataCloudflareZeroTrustCwsPolicySetsResult <a name="DataCloudflareZeroTrustCwsPolicySetsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsPolicySetsResult: dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult = { ... }
```


### DataCloudflareZeroTrustCwsPolicySetsResultPolicies <a name="DataCloudflareZeroTrustCwsPolicySetsResultPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsPolicySetsResultPolicies: dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPolicySetsResultList <a name="DataCloudflareZeroTrustCwsPolicySetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCwsPolicySetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsPolicySetsResultOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.excludeWorkloadIds">excludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.includeWorkloadIds">includeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList">DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult">DataCloudflareZeroTrustCwsPolicySetsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludeWorkloadIds`<sup>Required</sup> <a name="excludeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.excludeWorkloadIds"></a>

```typescript
public readonly excludeWorkloadIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeWorkloadIds`<sup>Required</sup> <a name="includeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.includeWorkloadIds"></a>

```typescript
public readonly includeWorkloadIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.policies"></a>

```typescript
public readonly policies: DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList">DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCwsPolicySetsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult">DataCloudflareZeroTrustCwsPolicySetsResult</a>

---


### DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList <a name="DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsPolicySets } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.enforce">enforce</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies">DataCloudflareZeroTrustCwsPolicySetsResultPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCwsPolicySetsResultPolicies;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies">DataCloudflareZeroTrustCwsPolicySetsResultPolicies</a>

---



