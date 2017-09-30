
import { Cmp4565Component } from './cmp';
describe('Cmp4565Component', () => {
  it('should add', () => {
    expect(new Cmp4565Component().add4565(1)).toBe(4566);
  });
});