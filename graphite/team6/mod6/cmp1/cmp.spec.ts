
import { Cmp6661Component } from './cmp';
describe('Cmp6661Component', () => {
  it('should add', () => {
    expect(new Cmp6661Component().add6661(1)).toBe(6662);
  });
});