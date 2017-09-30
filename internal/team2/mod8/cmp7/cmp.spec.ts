
import { Cmp8287Component } from './cmp';
describe('Cmp8287Component', () => {
  it('should add', () => {
    expect(new Cmp8287Component().add8287(1)).toBe(8288);
  });
});