
import { Cmp7577Component } from './cmp';
describe('Cmp7577Component', () => {
  it('should add', () => {
    expect(new Cmp7577Component().add7577(1)).toBe(7578);
  });
});