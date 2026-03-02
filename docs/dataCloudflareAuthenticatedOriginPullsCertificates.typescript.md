# `dataCloudflareAuthenticatedOriginPullsCertificates` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsCertificates` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificates <a name="DataCloudflareAuthenticatedOriginPullsCertificates" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/authenticated_origin_pulls_certificates cloudflare_authenticated_origin_pulls_certificates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsCertificatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig">DataCloudflareAuthenticatedOriginPullsCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig">DataCloudflareAuthenticatedOriginPullsCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAuthenticatedOriginPullsCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/authenticated_origin_pulls_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result"></a>

```typescript
public readonly result: DataCloudflareAuthenticatedOriginPullsCertificatesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesConfig <a name="DataCloudflareAuthenticatedOriginPullsCertificatesConfig" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

const dataCloudflareAuthenticatedOriginPullsCertificatesConfig: dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/authenticated_origin_pulls_certificates#zone_id DataCloudflareAuthenticatedOriginPullsCertificates#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/authenticated_origin_pulls_certificates#max_items DataCloudflareAuthenticatedOriginPullsCertificates#max_items}

---

### DataCloudflareAuthenticatedOriginPullsCertificatesResult <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResult" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

const dataCloudflareAuthenticatedOriginPullsCertificatesResult: dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesResultList <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultList" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificates } from '@cdktn/provider-cloudflare'

new dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAuthenticatedOriginPullsCertificatesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a>

---



