# `dataCloudflareBotManagement` Submodule <a name="`dataCloudflareBotManagement` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareBotManagement <a name="DataCloudflareBotManagement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

new dataCloudflareBotManagement.DataCloudflareBotManagement(scope: Construct, id: string, config: DataCloudflareBotManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareBotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareBotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareBotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection">aiBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel">autoUpdateModel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled">bmCookieEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant">cfRobotsVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection">crawlerProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs">enableJs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode">fightMode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress">optimizeWordpress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration">staleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore">suppressSessionScore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel">usingLatestModel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aiBotsProtection`<sup>Required</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection"></a>

```typescript
public readonly aiBotsProtection: string;
```

- *Type:* string

---

##### `autoUpdateModel`<sup>Required</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel"></a>

```typescript
public readonly autoUpdateModel: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bmCookieEnabled`<sup>Required</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled"></a>

```typescript
public readonly bmCookieEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cfRobotsVariant`<sup>Required</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant"></a>

```typescript
public readonly cfRobotsVariant: string;
```

- *Type:* string

---

##### `crawlerProtection`<sup>Required</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection"></a>

```typescript
public readonly crawlerProtection: string;
```

- *Type:* string

---

##### `enableJs`<sup>Required</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs"></a>

```typescript
public readonly enableJs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode"></a>

```typescript
public readonly fightMode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRobotsTxtManaged`<sup>Required</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged"></a>

```typescript
public readonly isRobotsTxtManaged: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress"></a>

```typescript
public readonly optimizeWordpress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated"></a>

```typescript
public readonly sbfmDefinitelyAutomated: string;
```

- *Type:* string

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated"></a>

```typescript
public readonly sbfmLikelyAutomated: string;
```

- *Type:* string

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection"></a>

```typescript
public readonly sbfmStaticResourceProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots"></a>

```typescript
public readonly sbfmVerifiedBots: string;
```

- *Type:* string

---

##### `staleZoneConfiguration`<sup>Required</sup> <a name="staleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration"></a>

```typescript
public readonly staleZoneConfiguration: DataCloudflareBotManagementStaleZoneConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a>

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore"></a>

```typescript
public readonly suppressSessionScore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `usingLatestModel`<sup>Required</sup> <a name="usingLatestModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel"></a>

```typescript
public readonly usingLatestModel: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareBotManagementConfig <a name="DataCloudflareBotManagementConfig" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.Initializer"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

const dataCloudflareBotManagementConfig: dataCloudflareBotManagement.DataCloudflareBotManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management#zone_id DataCloudflareBotManagement#zone_id}

---

### DataCloudflareBotManagementStaleZoneConfiguration <a name="DataCloudflareBotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration.Initializer"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

const dataCloudflareBotManagementStaleZoneConfiguration: dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareBotManagementStaleZoneConfigurationOutputReference <a name="DataCloudflareBotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareBotManagement } from '@cdktn/provider-cloudflare'

new dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode">fightMode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">optimizeWordpress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">suppressSessionScore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```typescript
public readonly fightMode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```typescript
public readonly optimizeWordpress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```typescript
public readonly sbfmDefinitelyAutomated: string;
```

- *Type:* string

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```typescript
public readonly sbfmLikelyAutomated: string;
```

- *Type:* string

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```typescript
public readonly sbfmStaticResourceProtection: string;
```

- *Type:* string

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```typescript
public readonly sbfmVerifiedBots: string;
```

- *Type:* string

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```typescript
public readonly suppressSessionScore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareBotManagementStaleZoneConfiguration;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a>

---



