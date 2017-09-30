
import { Cmp3306Component } from './cmp';
describe('Cmp3306Component', () => {
  it('should add', () => {
    expect(new Cmp3306Component().add3306(1)).toBe(3307);
  });
});