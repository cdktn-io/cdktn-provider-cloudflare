# `dataCloudflareZeroTrustDlpSensitivityLevel` Submodule <a name="`dataCloudflareZeroTrustDlpSensitivityLevel` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpSensitivityLevel <a name="DataCloudflareZeroTrustDlpSensitivityLevel" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level cloudflare_zero_trust_dlp_sensitivity_level}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpSensitivityLevelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig">DataCloudflareZeroTrustDlpSensitivityLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig">DataCloudflareZeroTrustDlpSensitivityLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityLevel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityLevel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpSensitivityLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpSensitivityLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpSensitivityLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityGroupIdInput">sensitivityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityLevelIdInput">sensitivityLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityLevelId">sensitivityLevelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `sensitivityGroupIdInput`<sup>Optional</sup> <a name="sensitivityGroupIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityGroupIdInput"></a>

```typescript
public readonly sensitivityGroupIdInput: string;
```

- *Type:* string

---

##### `sensitivityLevelIdInput`<sup>Optional</sup> <a name="sensitivityLevelIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityLevelIdInput"></a>

```typescript
public readonly sensitivityLevelIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

---

##### `sensitivityLevelId`<sup>Required</sup> <a name="sensitivityLevelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.sensitivityLevelId"></a>

```typescript
public readonly sensitivityLevelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpSensitivityLevelConfig <a name="DataCloudflareZeroTrustDlpSensitivityLevelConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityLevel } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpSensitivityLevelConfig: dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#account_id DataCloudflareZeroTrustDlpSensitivityLevel#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_group_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_group_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.sensitivityLevelId">sensitivityLevelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_level_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_level_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#account_id DataCloudflareZeroTrustDlpSensitivityLevel#account_id}.

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_group_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_group_id}.

---

##### `sensitivityLevelId`<sup>Required</sup> <a name="sensitivityLevelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityLevel.DataCloudflareZeroTrustDlpSensitivityLevelConfig.property.sensitivityLevelId"></a>

```typescript
public readonly sensitivityLevelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_level_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_level_id}.

---



