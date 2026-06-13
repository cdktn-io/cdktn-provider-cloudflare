# `dataCloudflareZeroTrustDlpSensitivityLevelOrder` Submodule <a name="`dataCloudflareZeroTrustDlpSensitivityLevelOrder` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpSensitivityLevelOrder <a name="DataCloudflareZeroTrustDlpSensitivityLevelOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order cloudflare_zero_trust_dlp_sensitivity_level_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig">DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig">DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityLevelOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityLevelOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpSensitivityLevelOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpSensitivityLevelOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpSensitivityLevelOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.levelIds">levelIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupIdInput">sensitivityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `levelIds`<sup>Required</sup> <a name="levelIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.levelIds"></a>

```typescript
public readonly levelIds: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `sensitivityGroupIdInput`<sup>Optional</sup> <a name="sensitivityGroupIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupIdInput"></a>

```typescript
public readonly sensitivityGroupIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig <a name="DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpSensitivityLevelOrderConfig: dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order#account_id DataCloudflareZeroTrustDlpSensitivityLevelOrder#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order#sensitivity_group_id DataCloudflareZeroTrustDlpSensitivityLevelOrder#sensitivity_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order#account_id DataCloudflareZeroTrustDlpSensitivityLevelOrder#account_id}.

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevelOrder.DataCloudflareZeroTrustDlpSensitivityLevelOrderConfig.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_dlp_sensitivity_level_order#sensitivity_group_id DataCloudflareZeroTrustDlpSensitivityLevelOrder#sensitivity_group_id}.

---



