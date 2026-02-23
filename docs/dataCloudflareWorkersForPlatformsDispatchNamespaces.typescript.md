# `dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule <a name="`dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespaces <a name="DataCloudflareWorkersForPlatformsDispatchNamespaces" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_for_platforms_dispatch_namespaces cloudflare_workers_for_platforms_dispatch_namespaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces(scope: Construct, id: string, config: DataCloudflareWorkersForPlatformsDispatchNamespacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig">DataCloudflareWorkersForPlatformsDispatchNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig">DataCloudflareWorkersForPlatformsDispatchNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result"></a>

```typescript
public readonly result: DataCloudflareWorkersForPlatformsDispatchNamespacesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesConfig <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersForPlatformsDispatchNamespacesConfig: dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#account_id DataCloudflareWorkersForPlatformsDispatchNamespaces#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#max_items DataCloudflareWorkersForPlatformsDispatchNamespaces#max_items}

---

### DataCloudflareWorkersForPlatformsDispatchNamespacesResult <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResult" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult.Initializer"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersForPlatformsDispatchNamespacesResult: dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesResultList <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersForPlatformsDispatchNamespaces } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount">scriptCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.trustedWorkers">trustedWorkers</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `scriptCount`<sup>Required</sup> <a name="scriptCount" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount"></a>

```typescript
public readonly scriptCount: number;
```

- *Type:* number

---

##### `trustedWorkers`<sup>Required</sup> <a name="trustedWorkers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.trustedWorkers"></a>

```typescript
public readonly trustedWorkers: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkersForPlatformsDispatchNamespacesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a>

---



