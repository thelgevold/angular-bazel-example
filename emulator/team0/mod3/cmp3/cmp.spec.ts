
import { Cmp4033Component } from './cmp';
describe('Cmp4033Component', () => {
  it('should add', () => {
    expect(new Cmp4033Component().add4033(1)).toBe(4034);
  });
});