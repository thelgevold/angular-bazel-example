
import { Cmp6528Component } from './cmp';
describe('Cmp6528Component', () => {
  it('should add', () => {
    expect(new Cmp6528Component().add6528(1)).toBe(6529);
  });
});