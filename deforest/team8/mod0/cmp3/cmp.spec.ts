
import { Cmp3803Component } from './cmp';
describe('Cmp3803Component', () => {
  it('should add', () => {
    expect(new Cmp3803Component().add3803(1)).toBe(3804);
  });
});