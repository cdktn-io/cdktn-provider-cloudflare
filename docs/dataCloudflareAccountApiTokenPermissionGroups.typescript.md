# `dataCloudflareAccountApiTokenPermissionGroups` Submodule <a name="`dataCloudflareAccountApiTokenPermissionGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountApiTokenPermissionGroups <a name="DataCloudflareAccountApiTokenPermissionGroups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups(scope: Construct, id: string, config: DataCloudflareAccountApiTokenPermissionGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig">DataCloudflareAccountApiTokenPermissionGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig">DataCloudflareAccountApiTokenPermissionGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccountApiTokenPermissionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.permissionGroups">permissionGroups</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.permissionGroups"></a>

```typescript
public readonly permissionGroups: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsConfig <a name="DataCloudflareAccountApiTokenPermissionGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountApiTokenPermissionGroupsConfig: dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.name">name</a></code> | <code>string</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.scope">scope</a></code> | <code>string</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#account_id DataCloudflareAccountApiTokenPermissionGroups#account_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#name DataCloudflareAccountApiTokenPermissionGroups#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#scope DataCloudflareAccountApiTokenPermissionGroups#scope}

---

### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountApiTokenPermissionGroupsPermissionGroups: dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get"></a>

```typescript
public get(index: number): DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountApiTokenPermissionGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups</a>

---



