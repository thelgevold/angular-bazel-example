
import { Cmp8306Component } from './cmp';
describe('Cmp8306Component', () => {
  it('should add', () => {
    expect(new Cmp8306Component().add8306(1)).toBe(8307);
  });
});