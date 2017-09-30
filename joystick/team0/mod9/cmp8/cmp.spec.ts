
import { Cmp9098Component } from './cmp';
describe('Cmp9098Component', () => {
  it('should add', () => {
    expect(new Cmp9098Component().add9098(1)).toBe(9099);
  });
});