
import { Cmp7040Component } from './cmp';
describe('Cmp7040Component', () => {
  it('should add', () => {
    expect(new Cmp7040Component().add7040(1)).toBe(7041);
  });
});