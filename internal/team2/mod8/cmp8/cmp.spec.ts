
import { Cmp8288Component } from './cmp';
describe('Cmp8288Component', () => {
  it('should add', () => {
    expect(new Cmp8288Component().add8288(1)).toBe(8289);
  });
});