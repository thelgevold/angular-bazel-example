
import { Cmp5964Component } from './cmp';
describe('Cmp5964Component', () => {
  it('should add', () => {
    expect(new Cmp5964Component().add5964(1)).toBe(5965);
  });
});