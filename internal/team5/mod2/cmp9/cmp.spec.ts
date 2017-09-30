
import { Cmp8529Component } from './cmp';
describe('Cmp8529Component', () => {
  it('should add', () => {
    expect(new Cmp8529Component().add8529(1)).toBe(8530);
  });
});