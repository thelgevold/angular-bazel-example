
import { Cmp6306Component } from './cmp';
describe('Cmp6306Component', () => {
  it('should add', () => {
    expect(new Cmp6306Component().add6306(1)).toBe(6307);
  });
});