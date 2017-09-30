
import { Cmp9012Component } from './cmp';
describe('Cmp9012Component', () => {
  it('should add', () => {
    expect(new Cmp9012Component().add9012(1)).toBe(9013);
  });
});