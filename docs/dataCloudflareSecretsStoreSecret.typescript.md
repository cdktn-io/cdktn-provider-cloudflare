# `dataCloudflareSecretsStoreSecret` Submodule <a name="`dataCloudflareSecretsStoreSecret` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSecretsStoreSecret <a name="DataCloudflareSecretsStoreSecret" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret cloudflare_secrets_store_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

new dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret(scope: Construct, id: string, config: DataCloudflareSecretsStoreSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig">DataCloudflareSecretsStoreSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig">DataCloudflareSecretsStoreSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareSecretsStoreSecretFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSecretsStoreSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareSecretsStoreSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSecretsStoreSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSecretsStoreSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSecretsStoreSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference">DataCloudflareSecretsStoreSecretFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeIdInput">storeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeId">storeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filter"></a>

```typescript
public readonly filter: DataCloudflareSecretsStoreSecretFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference">DataCloudflareSecretsStoreSecretFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareSecretsStoreSecretFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeIdInput"></a>

```typescript
public readonly storeIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSecretsStoreSecretConfig <a name="DataCloudflareSecretsStoreSecretConfig" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.Initializer"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

const dataCloudflareSecretsStoreSecretConfig: dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.accountId">accountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.storeId">storeId</a></code> | <code>string</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | Secret identifier tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#account_id DataCloudflareSecretsStoreSecret#account_id}

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#store_id DataCloudflareSecretsStoreSecret#store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareSecretsStoreSecretFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Secret identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#secret_id DataCloudflareSecretsStoreSecret#secret_id}

---

### DataCloudflareSecretsStoreSecretFilter <a name="DataCloudflareSecretsStoreSecretFilter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.Initializer"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

const dataCloudflareSecretsStoreSecretFilter: dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.direction">direction</a></code> | <code>string</code> | Direction to sort objects Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.order">order</a></code> | <code>string</code> | Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.scopes">scopes</a></code> | <code>cdktn.IResolvable \| string[][]</code> | Only secrets with the given scopes will be returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.search">search</a></code> | <code>string</code> | Search secrets using a filter string, filtering across name and comment. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#direction DataCloudflareSecretsStoreSecret#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#order DataCloudflareSecretsStoreSecret#order}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.scopes"></a>

```typescript
public readonly scopes: IResolvable | string[][];
```

- *Type:* cdktn.IResolvable | string[][]

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#scopes DataCloudflareSecretsStoreSecret#scopes}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/secrets_store_secret#search DataCloudflareSecretsStoreSecret#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSecretsStoreSecretFilterOutputReference <a name="DataCloudflareSecretsStoreSecretFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSecretsStoreSecret } from '@cdktn/provider-cloudflare'

new dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopesInput">scopesInput</a></code> | <code>cdktn.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopes">scopes</a></code> | <code>cdktn.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: IResolvable | string[][];
```

- *Type:* cdktn.IResolvable | string[][]

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopes"></a>

```typescript
public readonly scopes: IResolvable | string[][];
```

- *Type:* cdktn.IResolvable | string[][]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareSecretsStoreSecretFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

---



