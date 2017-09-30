
import { Cmp6397Component } from './cmp';
describe('Cmp6397Component', () => {
  it('should add', () => {
    expect(new Cmp6397Component().add6397(1)).toBe(6398);
  });
});