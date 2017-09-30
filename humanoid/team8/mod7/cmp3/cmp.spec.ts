
import { Cmp7873Component } from './cmp';
describe('Cmp7873Component', () => {
  it('should add', () => {
    expect(new Cmp7873Component().add7873(1)).toBe(7874);
  });
});