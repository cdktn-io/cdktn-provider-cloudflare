# `dataCloudflareAccountApiTokenPermissionGroupsList` Submodule <a name="`dataCloudflareAccountApiTokenPermissionGroupsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsList <a name="DataCloudflareAccountApiTokenPermissionGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list cloudflare_account_api_token_permission_groups_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList(scope: Construct, id: string, config: DataCloudflareAccountApiTokenPermissionGroupsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig">DataCloudflareAccountApiTokenPermissionGroupsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig">DataCloudflareAccountApiTokenPermissionGroupsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccountApiTokenPermissionGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result"></a>

```typescript
public readonly result: DataCloudflareAccountApiTokenPermissionGroupsListResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListConfig <a name="DataCloudflareAccountApiTokenPermissionGroupsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountApiTokenPermissionGroupsListConfig: dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name">name</a></code> | <code>string</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope">scope</a></code> | <code>string</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}

---

### DataCloudflareAccountApiTokenPermissionGroupsListResult <a name="DataCloudflareAccountApiTokenPermissionGroupsListResult" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountApiTokenPermissionGroupsListResult: dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListResultList <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountApiTokenPermissionGroupsListResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a>

---



