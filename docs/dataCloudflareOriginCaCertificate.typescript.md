# `dataCloudflareOriginCaCertificate` Submodule <a name="`dataCloudflareOriginCaCertificate` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOriginCaCertificate <a name="DataCloudflareOriginCaCertificate" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate cloudflare_origin_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

new dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate(scope: Construct, id: string, config?: DataCloudflareOriginCaCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig">DataCloudflareOriginCaCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig">DataCloudflareOriginCaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareOriginCaCertificateFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a>

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareOriginCaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isConstruct"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformElement"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformDataSource"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareOriginCaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOriginCaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOriginCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareOriginCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference">DataCloudflareOriginCaCertificateFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.requestedValidity">requestedValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.filter"></a>

```typescript
public readonly filter: DataCloudflareOriginCaCertificateFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference">DataCloudflareOriginCaCertificateFilterOutputReference</a>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `requestedValidity`<sup>Required</sup> <a name="requestedValidity" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.requestedValidity"></a>

```typescript
public readonly requestedValidity: number;
```

- *Type:* number

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareOriginCaCertificateFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOriginCaCertificateConfig <a name="DataCloudflareOriginCaCertificateConfig" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

const dataCloudflareOriginCaCertificateConfig: dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#filter DataCloudflareOriginCaCertificate#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#certificate_id DataCloudflareOriginCaCertificate#certificate_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareOriginCaCertificateFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#filter DataCloudflareOriginCaCertificate#filter}.

---

### DataCloudflareOriginCaCertificateFilter <a name="DataCloudflareOriginCaCertificateFilter" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

const dataCloudflareOriginCaCertificateFilter: dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.limit">limit</a></code> | <code>number</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.offset">offset</a></code> | <code>number</code> | Offset the results. |

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#zone_id DataCloudflareOriginCaCertificate#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#limit DataCloudflareOriginCaCertificate#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/origin_ca_certificate#offset DataCloudflareOriginCaCertificate#offset}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOriginCaCertificateFilterOutputReference <a name="DataCloudflareOriginCaCertificateFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOriginCaCertificate } from '@cdktn/provider-cloudflare'

new dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOriginCaCertificateFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareOriginCaCertificate.DataCloudflareOriginCaCertificateFilter">DataCloudflareOriginCaCertificateFilter</a>

---



