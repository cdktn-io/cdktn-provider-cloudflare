# `dataCloudflareAuthenticatedOriginPullsHostnameCertificate` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsHostnameCertificate` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificate <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

new dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig">DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig">DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

const dataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig: dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#certificate_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#certificate_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#zone_id}

---



