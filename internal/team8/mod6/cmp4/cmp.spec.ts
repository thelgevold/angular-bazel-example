
import { Cmp8864Component } from './cmp';
describe('Cmp8864Component', () => {
  it('should add', () => {
    expect(new Cmp8864Component().add8864(1)).toBe(8865);
  });
});