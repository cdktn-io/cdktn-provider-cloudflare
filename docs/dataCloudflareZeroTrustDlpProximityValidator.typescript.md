# `dataCloudflareZeroTrustDlpProximityValidator` Submodule <a name="`dataCloudflareZeroTrustDlpProximityValidator` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpProximityValidator <a name="DataCloudflareZeroTrustDlpProximityValidator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator cloudflare_zero_trust_dlp_proximity_validator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpProximityValidatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpProximityValidator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpProximityValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpProximityValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy">referencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words">words</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput">validatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId">validatorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedBy`<sup>Required</sup> <a name="referencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy"></a>

```typescript
public readonly referencedBy: DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words"></a>

```typescript
public readonly words: DataCloudflareZeroTrustDlpProximityValidatorWordsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `validatorIdInput`<sup>Optional</sup> <a name="validatorIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput"></a>

```typescript
public readonly validatorIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `validatorId`<sup>Required</sup> <a name="validatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId"></a>

```typescript
public readonly validatorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpProximityValidatorConfig <a name="DataCloudflareZeroTrustDlpProximityValidatorConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpProximityValidatorConfig: dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId">validatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}.

---

##### `validatorId`<sup>Required</sup> <a name="validatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId"></a>

```typescript
public readonly validatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}.

---

### DataCloudflareZeroTrustDlpProximityValidatorReferencedBy <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpProximityValidatorReferencedBy: dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy = { ... }
```


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries: dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries = { ... }
```


### DataCloudflareZeroTrustDlpProximityValidatorWords <a name="DataCloudflareZeroTrustDlpProximityValidatorWords" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpProximityValidatorWords: dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount">entryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries"></a>

```typescript
public readonly entries: DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a>

---

##### `entryCount`<sup>Required</sup> <a name="entryCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount"></a>

```typescript
public readonly entryCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpProximityValidatorReferencedBy;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsList <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpProximityValidator } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight">weight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word">word</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight"></a>

```typescript
public readonly weight: string;
```

- *Type:* string

---

##### `word`<sup>Required</sup> <a name="word" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word"></a>

```typescript
public readonly word: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpProximityValidatorWords;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a>

---



