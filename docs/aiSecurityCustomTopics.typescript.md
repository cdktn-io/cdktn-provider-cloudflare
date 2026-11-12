# `aiSecurityCustomTopics` Submodule <a name="`aiSecurityCustomTopics` Submodule" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSecurityCustomTopics <a name="AiSecurityCustomTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics cloudflare_ai_security_custom_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new aiSecurityCustomTopics.AiSecurityCustomTopics(scope: Construct, id: string, config: AiSecurityCustomTopicsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig">AiSecurityCustomTopicsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig">AiSecurityCustomTopicsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics">putTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetTopics">resetTopics</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTopics` <a name="putTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics"></a>

```typescript
public putTopics(value: IResolvable | AiSecurityCustomTopicsTopics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]

---

##### `resetTopics` <a name="resetTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetTopics"></a>

```typescript
public resetTopics(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiSecurityCustomTopics resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiSecurityCustomTopics resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSecurityCustomTopics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSecurityCustomTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSecurityCustomTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topics">topics</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList">AiSecurityCustomTopicsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topicsInput">topicsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topics"></a>

```typescript
public readonly topics: AiSecurityCustomTopicsTopicsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList">AiSecurityCustomTopicsTopicsList</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topicsInput"></a>

```typescript
public readonly topicsInput: IResolvable | AiSecurityCustomTopicsTopics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSecurityCustomTopicsConfig <a name="AiSecurityCustomTopicsConfig" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.Initializer"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

const aiSecurityCustomTopicsConfig: aiSecurityCustomTopics.AiSecurityCustomTopicsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines the zone. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.topics">topics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]</code> | Custom topic categories for AI Security for Apps content detection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#zone_id AiSecurityCustomTopics#zone_id}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.topics"></a>

```typescript
public readonly topics: IResolvable | AiSecurityCustomTopicsTopics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]

Custom topic categories for AI Security for Apps content detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#topics AiSecurityCustomTopics#topics}

---

### AiSecurityCustomTopicsTopics <a name="AiSecurityCustomTopicsTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.Initializer"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

const aiSecurityCustomTopicsTopics: aiSecurityCustomTopics.AiSecurityCustomTopicsTopics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.label">label</a></code> | <code>string</code> | Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.topic">topic</a></code> | <code>string</code> | Description of the topic category. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#label AiSecurityCustomTopics#label}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Description of the topic category.

Must contain 2–50 UTF-8 bytes. Text in any language is supported, including spaces, numbers, punctuation, and symbols. Tabs, line breaks, invalid text, and invisible formatting characters are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#topic AiSecurityCustomTopics#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSecurityCustomTopicsTopicsList <a name="AiSecurityCustomTopicsTopicsList" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get"></a>

```typescript
public get(index: number): AiSecurityCustomTopicsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSecurityCustomTopicsTopics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>[]

---


### AiSecurityCustomTopicsTopicsOutputReference <a name="AiSecurityCustomTopicsTopicsOutputReference" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer"></a>

```typescript
import { aiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSecurityCustomTopicsTopics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>

---



