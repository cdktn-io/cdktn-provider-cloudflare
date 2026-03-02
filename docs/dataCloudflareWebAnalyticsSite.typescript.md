# `dataCloudflareWebAnalyticsSite` Submodule <a name="`dataCloudflareWebAnalyticsSite` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWebAnalyticsSite <a name="DataCloudflareWebAnalyticsSite" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

new dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite(scope: Construct, id: string, config: DataCloudflareWebAnalyticsSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig">DataCloudflareWebAnalyticsSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig">DataCloudflareWebAnalyticsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId">resetSiteId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareWebAnalyticsSiteFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId"></a>

```typescript
public resetSiteId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWebAnalyticsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWebAnalyticsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWebAnalyticsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall">autoInstall</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset">ruleset</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag">siteTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken">siteToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet">snippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoInstall`<sup>Required</sup> <a name="autoInstall" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall"></a>

```typescript
public readonly autoInstall: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter"></a>

```typescript
public readonly filter: DataCloudflareWebAnalyticsSiteFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules"></a>

```typescript
public readonly rules: DataCloudflareWebAnalyticsSiteRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset"></a>

```typescript
public readonly ruleset: DataCloudflareWebAnalyticsSiteRulesetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a>

---

##### `siteTag`<sup>Required</sup> <a name="siteTag" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag"></a>

```typescript
public readonly siteTag: string;
```

- *Type:* string

---

##### `siteToken`<sup>Required</sup> <a name="siteToken" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken"></a>

```typescript
public readonly siteToken: string;
```

- *Type:* string

---

##### `snippet`<sup>Required</sup> <a name="snippet" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet"></a>

```typescript
public readonly snippet: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareWebAnalyticsSiteFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWebAnalyticsSiteConfig <a name="DataCloudflareWebAnalyticsSiteConfig" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

const dataCloudflareWebAnalyticsSiteConfig: dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#account_id DataCloudflareWebAnalyticsSite#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareWebAnalyticsSiteFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#site_id DataCloudflareWebAnalyticsSite#site_id}

---

### DataCloudflareWebAnalyticsSiteFilter <a name="DataCloudflareWebAnalyticsSiteFilter" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

const dataCloudflareWebAnalyticsSiteFilter: dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy">orderBy</a></code> | <code>string</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/web_analytics_site#order_by DataCloudflareWebAnalyticsSite#order_by}

---

### DataCloudflareWebAnalyticsSiteRules <a name="DataCloudflareWebAnalyticsSiteRules" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

const dataCloudflareWebAnalyticsSiteRules: dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules = { ... }
```


### DataCloudflareWebAnalyticsSiteRuleset <a name="DataCloudflareWebAnalyticsSiteRuleset" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

const dataCloudflareWebAnalyticsSiteRuleset: dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWebAnalyticsSiteFilterOutputReference <a name="DataCloudflareWebAnalyticsSiteFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

new dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareWebAnalyticsSiteFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---


### DataCloudflareWebAnalyticsSiteRulesetOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesetOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

new dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag">zoneTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `zoneTag`<sup>Required</sup> <a name="zoneTag" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag"></a>

```typescript
public readonly zoneTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWebAnalyticsSiteRuleset;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a>

---


### DataCloudflareWebAnalyticsSiteRulesList <a name="DataCloudflareWebAnalyticsSiteRulesList" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

new dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get"></a>

```typescript
public get(index: number): DataCloudflareWebAnalyticsSiteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWebAnalyticsSiteRulesOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWebAnalyticsSite } from '@cdktn/provider-cloudflare'

new dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive">inclusive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused">isPaused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive"></a>

```typescript
public readonly inclusive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused"></a>

```typescript
public readonly isPaused: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWebAnalyticsSiteRules;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a>

---



