
import { Cmp8780Component } from './cmp';
describe('Cmp8780Component', () => {
  it('should add', () => {
    expect(new Cmp8780Component().add8780(1)).toBe(8781);
  });
});