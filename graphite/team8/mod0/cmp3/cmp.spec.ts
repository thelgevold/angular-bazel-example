
import { Cmp6803Component } from './cmp';
describe('Cmp6803Component', () => {
  it('should add', () => {
    expect(new Cmp6803Component().add6803(1)).toBe(6804);
  });
});