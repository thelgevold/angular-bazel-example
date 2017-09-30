
import { Cmp3873Component } from './cmp';
describe('Cmp3873Component', () => {
  it('should add', () => {
    expect(new Cmp3873Component().add3873(1)).toBe(3874);
  });
});