
import { Cmp7922Component } from './cmp';
describe('Cmp7922Component', () => {
  it('should add', () => {
    expect(new Cmp7922Component().add7922(1)).toBe(7923);
  });
});