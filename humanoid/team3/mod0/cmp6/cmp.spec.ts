
import { Cmp7306Component } from './cmp';
describe('Cmp7306Component', () => {
  it('should add', () => {
    expect(new Cmp7306Component().add7306(1)).toBe(7307);
  });
});