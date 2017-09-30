
import { Cmp4873Component } from './cmp';
describe('Cmp4873Component', () => {
  it('should add', () => {
    expect(new Cmp4873Component().add4873(1)).toBe(4874);
  });
});