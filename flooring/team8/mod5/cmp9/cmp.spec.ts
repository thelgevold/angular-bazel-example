
import { Cmp5859Component } from './cmp';
describe('Cmp5859Component', () => {
  it('should add', () => {
    expect(new Cmp5859Component().add5859(1)).toBe(5860);
  });
});