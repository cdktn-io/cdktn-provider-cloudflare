# `dataCloudflareEmailSendingSubdomains` Submodule <a name="`dataCloudflareEmailSendingSubdomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSendingSubdomains <a name="DataCloudflareEmailSendingSubdomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_sending_subdomains cloudflare_email_sending_subdomains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains(scope: Construct, id: string, config: DataCloudflareEmailSendingSubdomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig">DataCloudflareEmailSendingSubdomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig">DataCloudflareEmailSendingSubdomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSendingSubdomains resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isConstruct"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailSendingSubdomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSendingSubdomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSendingSubdomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_sending_subdomains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSendingSubdomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList">DataCloudflareEmailSendingSubdomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.result"></a>

```typescript
public readonly result: DataCloudflareEmailSendingSubdomainsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList">DataCloudflareEmailSendingSubdomainsResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSendingSubdomainsConfig <a name="DataCloudflareEmailSendingSubdomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSendingSubdomainsConfig: dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_sending_subdomains#zone_id DataCloudflareEmailSendingSubdomains#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_sending_subdomains#max_items DataCloudflareEmailSendingSubdomains#max_items}

---

### DataCloudflareEmailSendingSubdomainsResult <a name="DataCloudflareEmailSendingSubdomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResult.Initializer"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSendingSubdomainsResult: dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSendingSubdomainsResultList <a name="DataCloudflareEmailSendingSubdomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailSendingSubdomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailSendingSubdomainsResultOutputReference <a name="DataCloudflareEmailSendingSubdomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSendingSubdomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.dkimSelector">dkimSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.dropSuppressedRecipients">dropSuppressedRecipients</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.previewEnabled">previewEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.returnPathDomain">returnPathDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResult">DataCloudflareEmailSendingSubdomainsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `dkimSelector`<sup>Required</sup> <a name="dkimSelector" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.dkimSelector"></a>

```typescript
public readonly dkimSelector: string;
```

- *Type:* string

---

##### `dropSuppressedRecipients`<sup>Required</sup> <a name="dropSuppressedRecipients" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.dropSuppressedRecipients"></a>

```typescript
public readonly dropSuppressedRecipients: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `previewEnabled`<sup>Required</sup> <a name="previewEnabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.previewEnabled"></a>

```typescript
public readonly previewEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `returnPathDomain`<sup>Required</sup> <a name="returnPathDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.returnPathDomain"></a>

```typescript
public readonly returnPathDomain: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSendingSubdomainsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSendingSubdomains.DataCloudflareEmailSendingSubdomainsResult">DataCloudflareEmailSendingSubdomainsResult</a>

---



