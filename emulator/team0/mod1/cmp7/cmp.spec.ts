
import { Cmp4017Component } from './cmp';
describe('Cmp4017Component', () => {
  it('should add', () => {
    expect(new Cmp4017Component().add4017(1)).toBe(4018);
  });
});