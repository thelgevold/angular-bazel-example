
import { Cmp7704Component } from './cmp';
describe('Cmp7704Component', () => {
  it('should add', () => {
    expect(new Cmp7704Component().add7704(1)).toBe(7705);
  });
});