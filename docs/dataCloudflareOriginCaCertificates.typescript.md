# `dataCloudflareOriginCaCertificates` Submodule <a name="`dataCloudflareOriginCaCertificates` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOriginCaCertificates <a name="DataCloudflareOriginCaCertificates" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates cloudflare_origin_ca_certificates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates(scope: Construct, id: string, config: DataCloudflareOriginCaCertificatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig">DataCloudflareOriginCaCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig">DataCloudflareOriginCaCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.resetOffset"></a>

```typescript
public resetOffset(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareOriginCaCertificates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isConstruct"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformElement"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformDataSource"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareOriginCaCertificates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOriginCaCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOriginCaCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareOriginCaCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList">DataCloudflareOriginCaCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.result"></a>

```typescript
public readonly result: DataCloudflareOriginCaCertificatesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList">DataCloudflareOriginCaCertificatesResultList</a>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOriginCaCertificatesConfig <a name="DataCloudflareOriginCaCertificatesConfig" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

const dataCloudflareOriginCaCertificatesConfig: dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.limit">limit</a></code> | <code>number</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.offset">offset</a></code> | <code>number</code> | Offset the results. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates#zone_id DataCloudflareOriginCaCertificates#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates#limit DataCloudflareOriginCaCertificates#limit}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates#max_items DataCloudflareOriginCaCertificates#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/origin_ca_certificates#offset DataCloudflareOriginCaCertificates#offset}

---

### DataCloudflareOriginCaCertificatesResult <a name="DataCloudflareOriginCaCertificatesResult" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResult.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

const dataCloudflareOriginCaCertificatesResult: dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOriginCaCertificatesResultList <a name="DataCloudflareOriginCaCertificatesResultList" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareOriginCaCertificatesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareOriginCaCertificatesResultOutputReference <a name="DataCloudflareOriginCaCertificatesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.requestedValidity">requestedValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResult">DataCloudflareOriginCaCertificatesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `requestedValidity`<sup>Required</sup> <a name="requestedValidity" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.requestedValidity"></a>

```typescript
public readonly requestedValidity: number;
```

- *Type:* number

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOriginCaCertificatesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificates.DataCloudflareOriginCaCertificatesResult">DataCloudflareOriginCaCertificatesResult</a>

---



