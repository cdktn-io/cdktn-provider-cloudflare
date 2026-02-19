# `dataCloudflareSchemaValidationSchemasList` Submodule <a name="`dataCloudflareSchemaValidationSchemasList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemasList <a name="DataCloudflareSchemaValidationSchemasList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

new dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList(scope: Construct, id: string, config: DataCloudflareSchemaValidationSchemasListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource">resetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled">resetValidationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOmitSource` <a name="resetOmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource"></a>

```typescript
public resetOmitSource(): void
```

##### `resetValidationEnabled` <a name="resetValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled"></a>

```typescript
public resetValidationEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput">omitSourceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput">validationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource">omitSource</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled">validationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result"></a>

```typescript
public readonly result: DataCloudflareSchemaValidationSchemasListResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `omitSourceInput`<sup>Optional</sup> <a name="omitSourceInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput"></a>

```typescript
public readonly omitSourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationEnabledInput`<sup>Optional</sup> <a name="validationEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput"></a>

```typescript
public readonly validationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `omitSource`<sup>Required</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource"></a>

```typescript
public readonly omitSource: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled"></a>

```typescript
public readonly validationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasListConfig <a name="DataCloudflareSchemaValidationSchemasListConfig" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

const dataCloudflareSchemaValidationSchemasListConfig: dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource">omitSource</a></code> | <code>boolean \| cdktn.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled">validationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter for enabled schemas. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource"></a>

```typescript
public readonly omitSource: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled"></a>

```typescript
public readonly validationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}

---

### DataCloudflareSchemaValidationSchemasListResult <a name="DataCloudflareSchemaValidationSchemasListResult" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

const dataCloudflareSchemaValidationSchemasListResult: dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasListResultList <a name="DataCloudflareSchemaValidationSchemasListResultList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

new dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareSchemaValidationSchemasListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareSchemaValidationSchemasListResultOutputReference <a name="DataCloudflareSchemaValidationSchemasListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationSchemasList } from '@cdktn/provider-cloudflare'

new dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled">validationEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled"></a>

```typescript
public readonly validationEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareSchemaValidationSchemasListResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a>

---



