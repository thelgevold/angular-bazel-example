
import { Cmp4224Component } from './cmp';
describe('Cmp4224Component', () => {
  it('should add', () => {
    expect(new Cmp4224Component().add4224(1)).toBe(4225);
  });
});