
import { Cmp4095Component } from './cmp';
describe('Cmp4095Component', () => {
  it('should add', () => {
    expect(new Cmp4095Component().add4095(1)).toBe(4096);
  });
});