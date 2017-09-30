
import { Cmp4012Component } from './cmp';
describe('Cmp4012Component', () => {
  it('should add', () => {
    expect(new Cmp4012Component().add4012(1)).toBe(4013);
  });
});